type APIResponse =
    | {
        data: {
            id: string
        }
    }
    | {
        data?: undefined
        error: string
    }

const handleResponse = (response: APIResponse) => {
    // How do we check if 'data' is in the response?

    if ('data' in response) {
        if (response.data) {
            return response.data.id;
        } else {
            throw new Error('Data is undefined');
        }
    } else {
        throw new Error(response.error)
    }
}

test('passes the test even with the error', () => {
    // there is no error in runtime

    expect(() =>
        handleResponse({
            error: 'Invalid argument',
        }),
    ).not.toThrowError()

    // but the data is returned, instead of an error.

    expect(
        handleResponse({
            error: 'Invalid argument',
        }),
    ).toEqual("Should this be 'Error'?")
})