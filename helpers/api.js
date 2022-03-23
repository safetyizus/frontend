export const api = (strings) => {
    return `https://siu-api-dev.herokuapp.com/v1${strings.join("")}`;
};
