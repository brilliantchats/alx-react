export function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    const str = isIndex ? "Holberton School": "Holberton School main dashboard";
    return str;
}

export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}