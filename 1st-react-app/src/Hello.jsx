function Hello(){

            let myName = "Anjali";
            let number = 456;
            let fullName = () => {
                        return 'Anjali Kushwaha';
            }
            return <p>
                        Message: {number} Hello I am {fullName()}
            </p>
}

export default Hello;