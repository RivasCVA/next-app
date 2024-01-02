type RequestOptions = Pick<RequestInit, 'cache' | 'next'> & {
    headers?: {
        'Content-Type'?: 'application/json';
    };
};

type TypedResponse<Res> = Omit<Response, 'json'> & {
    json: () => Promise<Res>;
};

export const createURLWithSearchParams = (
    url: string,
    params: Record<string, string | number | boolean | undefined>,
) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams.size > 0 ? `${url}?${searchParams.toString()}` : url;
};

export const getSearchParamsFromURL = <T extends object>(url: string) => {
    // TODO:
    // 1. See if we can limit object values to string, number, and boolean
    // 2. check if conversion to those values is done.
    const baseURL = new URL(url);
    return Object.fromEntries(baseURL.searchParams.entries()) as Partial<T>;
};

const get = <Res>(url: string, opts?: RequestOptions) => {
    const { ...rest } = opts || {};
    return fetch(url, {
        method: 'GET',
        ...rest,
    }) as Promise<TypedResponse<Res>>;
};

const post = <Req, Res>(url: string, data: Req, opts?: RequestOptions) => {
    const { headers, ...rest } = opts || {};
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        body: JSON.stringify(data),
        ...rest,
    }) as Promise<TypedResponse<Res>>;
};

export default { get, post };
