let CurrentTime = () => {

            let time = new Date();

  return <h3>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h3>;
};

export default CurrentTime;
