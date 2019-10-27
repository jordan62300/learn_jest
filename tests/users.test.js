import Users from '../js/users';
import axios from 'axios';

jest.mock('axios')

describe('Users' , function () {

    beforeEach( () => {
        axios.mockClear()
    })

    test("should return last user", async () => {
        axios.get.mockResolvedValue({ data: [{name: 'John Doe'}]})
        expect(await Users.getLastUserName()).toBe('John Doe')
    })
    
})