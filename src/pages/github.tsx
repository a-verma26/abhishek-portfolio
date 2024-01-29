export const getServerSideProps = async () => {
    return {
        redirect: {
            destination: "https://github.com/a-verma26",
            permanent: false,
        },
    };
};

const GithubRedirect = () => null;

export default GithubRedirect;
