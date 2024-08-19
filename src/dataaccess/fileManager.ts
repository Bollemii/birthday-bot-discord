import fs from 'fs';

const checkFileExists = (path: string) => {
    fs.existsSync(path) || fs.writeFileSync(path, '{}', 'utf8');
};

export const readFile = (path: string) => {
    checkFileExists(path);
    try {
        return fs.readFileSync(path, 'utf8');
    } catch (err) {
        console.error(err);
    }
};

export const writeFile = (path: string, data: string) => {
    try {
        checkFileExists(path);
        fs.writeFileSync(path, data, 'utf8');
    } catch (err) {
        console.error(err);
    }
};