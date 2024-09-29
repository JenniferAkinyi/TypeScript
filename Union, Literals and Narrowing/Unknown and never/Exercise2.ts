import { Equal, Expect } from '@total-typescript/helpers'

function hasDataWithId(value: unknown): value is { data: { id: string } } {
    return (
        typeof value === 'object' &&
        value !== null &&
        'data' in value &&
        typeof (value as any).data === 'object' &&
        (value as any).data !== null &&
        'id' in (value as any).data &&
        typeof (value as any).data.id === 'string'
    );
}

const parseValue = (value: unknown) => {
    if (hasDataWithId(value)) {
        return value.data.id
    }

    throw new Error('Parsing error!')
}
it('Should handle a { data: { id: string } }', () => {
    const result = parseValue({
        data: {
            id: '123',
        },
    })

    type test = Expect<Equal<typeof result, string>>

    expect(result).toBe('123')
})

it('Should error when anything else is passed in', () => {
    expect(() => parseValue('123')).toThrow('Parsing error!')

    expect(() => parseValue(123)).toThrow('Parsing error!')
})