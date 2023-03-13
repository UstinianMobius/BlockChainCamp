import { ethers } from 'hardhat'
import { expect } from 'chai'

import { Counter } from '../typechain-types'

let counter: Counter

describe('Counter', () => {
    async function init() {
        const [owner] = await ethers.getSigners()
        const Counter = await ethers.getContractFactory('Counter', owner)
        counter = await Counter.deploy()
        await counter.deployed()
        console.log(`counter is deployed,address is ${counter.address}`)
    }

    before(async () => {
        await init()
    })

    it('Should init equal 0', async () => {
        expect(await counter.getCount()).to.equal(0)
    })

    it('Should add 1 equal 1', async () => {
        const addAfterCount = await counter.addCount()
        await addAfterCount.wait()
        expect(await counter.getCount()).to.equal(1)
    })

    it('Should only owner call', async () => {
        const [owner] = await ethers.getSigners()
        const defaultCount = await counter.getCount()
        await counter.connect(owner).addCount()
        const addAfterCount = await counter.getCount()
        expect(addAfterCount).to.equal(defaultCount.add(1))
    })

    it('Should others call', async () => {
        const [, otherAccount] = await ethers.getSigners()
        let msg = ''
        try {
            await counter.connect(otherAccount).addCount()
        } catch (err) {
            msg = String(err)
        }
        expect(msg).to.have.string("you aren't owner")
    })
})