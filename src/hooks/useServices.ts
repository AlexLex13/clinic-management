import { useState, useEffect } from "react";
import {ServiceType} from "@/shared/types";
import axios from "axios";

const useServices = (apiUrl: string) => {

    const [services, setServices] = useState({
        loading: false,
        repos: Array<ServiceType>()
    });

    useEffect(() => {
        axios.get(apiUrl).then((repos) => {
            const allRepos = repos.data;
            setServices({ loading: false, repos: allRepos });
        });
    }, [setServices]);

    return services;
};

export default useServices;