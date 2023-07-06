const handlers = require('../handlers')

test('should render home page', () => {
    const req = {}
    const res = {render : jest.fn() }
    handlers.home(req, res)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

test('should render about page with fortune ', () => {
    const req = {}
    const res = {render : jest.fn() }
    handlers.about(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('about')
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
        fortune: expect.stringMatching(/\W/),
    }))
})

test('should render 404 page', () => {
    const req = {}
    const res = {render : jest.fn() }
    handlers.notFound(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
})

test('should render 500 server error page', () => {
    const err = new Error('error ')
    const next = jest.fn()
    const req = {}
    const res = { render : jest.fn() }
    handlers.serverError(req, res,next,err)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('500')
})