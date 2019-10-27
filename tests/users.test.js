import Users from '../js/users';
import axios from 'axios';

jest.mock('axios')

describe('Users' , function () {

    beforeEach( () => {
        axios.mockClear()
    })

    const fakeResponse = [{name: 'John Doe'}]

    test("should return last user", async () => {
        axios.get.mockResolvedValue({ data: fakeResponse})
        expect(await Users.getLastUserName()).toBe('John Doe')
    })

    test("should return last user with fetch", async () => {
        fetch.mockResponseOnce(JSON.stringify(fakeResponse))
        expect(await Users.getLastUserNameFetch()).toBe('John Doe')
    })
    
})