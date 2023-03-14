const defaultExpiresCookie = new Date(Date.now() + 86400e3).toUTCString();

export function getCookie(name: string) {
    const matches = document.cookie.match(new RegExp(
        // eslint-disable-next-line
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(matches[1]) : null;
}

export function setCookie(name: string, data: string, expiresCookie: string = defaultExpiresCookie) {
    document.cookie = `${name}=${data}; expires=${expiresCookie}; path=/`;
}