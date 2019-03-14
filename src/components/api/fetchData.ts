export function fetchData<T>(url: string, config = {}, errorHandler?: (response?: Response) => any): Promise<T> { // tslint:disable-line
    return fetch(url, config)
        .then(response => {
            if (!response.ok) {
                if (errorHandler) {
                    return errorHandler(response);
                }
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            if (errorHandler) {
                return errorHandler(error);
            }
            throw new Error(error);
        });
}
