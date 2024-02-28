import { SetStateAction, useEffect, useState } from 'react';
import { AppointmentListProps } from '../table/types';

export const useGetPatientList = () => {

    const [data, setData] = useState<AppointmentListProps[]>([] as AppointmentListProps[]);
    const [error, setError] = useState<SetStateAction<unknown>>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL);
                const jsonData = await response.json();
                setData(jsonData.appointments);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [])
    return { data, error, loading }
}
