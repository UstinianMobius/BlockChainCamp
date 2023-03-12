import { ethers } from 'hardhat'
import { expect } from 'chai'

let counter: any

describe('Counter', () => {
    async function init() {
        const [owner, otherAccount] = await ethers.getSigners()
        const Counter = await ethers.getContractFactory('Counter')
        counter = await Counter.deploy()
        await counter.deployed()
        console.log('counter:' + counter.address)
    }

    before(async () => {
        await init()
    })

    it("init equal 0", async () => {
        expect(await counter.getCount()).to.equal(0)
    })

    it("add 1 equal 1", async () => {
        const addAfterCount = await counter.addCount()
        await addAfterCount.wait()
        expect(await counter.getCount()).to.equal(1)
    })
})