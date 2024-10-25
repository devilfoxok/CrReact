import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIslLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setIslLoading(true);
            await callback(...args);
        } catch (e) {
            setError(e.message);
        } finally {
            setIslLoading(false);
        }
    }

    return [fetching, isLoading, error]
}