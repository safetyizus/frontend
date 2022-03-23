import { useUser } from "@auth0/nextjs-auth0";
import useFetch from "./useFetch";

const useProperties = (id) => {
    const { user } = useUser();
    console.log(user.name);

    // const { loading, data, error } = useFetch(
    //     `https://siu-api-dev.herokuapp.com/v1/properties/${id}`,
    //     {
    //         method: "POST",
    //         body: JSON.stringify({
    //             property: {
    //                 user_id: user.sub,
    //             },
    //         }),
    //     },
    //     [user, id]
    // );
};

export default useProperties;
