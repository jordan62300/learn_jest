import { ping } from '../js/discord';

describe('Discord' , () => {

    test('Should dm the user', async () => {
        const channelMock = {
            send: jest.fn()
        }
        const createDMMock = jest.fn().mockResolvedValue(channelMock)
        const message = {
            delete: jest.fn().mockResolvedValue({}),
            reply: jest.fn(),
            author: {
                createDM: createDMMock
            }
        }
        await ping(message)
        expect(message.delete).toHaveBeenCalled()
        expect(channelMock.send).toHaveBeenCalledWith('pong')
    })

    test('Should reply to the user if dm are desactivated', async () => {
        const channelMock = {
            send: jest.fn()
        }
        const createDMMock = jest.fn().mockRejectedValue({})
        const message = {
            delete: jest.fn().mockResolvedValue({}),
            reply: jest.fn(),
            author: {
                createDM: createDMMock
            }
        }
        await ping(message)
        expect(message.delete).toHaveBeenCalled()
        expect(message.reply).toHaveBeenCalledWith('ping')
    })
    
})