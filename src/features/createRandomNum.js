export function createRandomNum(props) {
    const dataLength = props;
    const randomNum = Math.floor(Math.random() * dataLength);
    
    return randomNum;
}