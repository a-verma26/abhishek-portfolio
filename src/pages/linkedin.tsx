export const getServerSideProps = async () => {
    return {
        redirect: {
            destination: "https://www.linkedin.com/in/a-verma26 ",
            permanent: false,
        },
    };
};

const LinkedinRedirect = () => null;

export default LinkedinRedirect;
