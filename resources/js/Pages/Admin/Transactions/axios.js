import axios from "axios";

const axiosIns = axios.create({
    // baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZU5hbWUiOiJjb2RlY2hhdC1ib3QiLCJhcGlOYW1lIjoid2hhdHNhcHAtYXBpIiwidG9rZW5JZCI6IjI0M2MwMmJmLWM5NDAtNDE3OS04NjU3LWE2ODcwZDM2NzQ1ZSIsImlhdCI6MTcwODI3NTY0MywiZXhwIjoxNzA4Mjc1NjQzLCJzdWIiOiJnLXQifQ.mSnRGtjIlR31z3UiFay8GZzCRgPVFl0LIha0eosYezI",
        globalApikey: "zYzP7ocstxh3Sscefew4FZTCu4ehnM8v4hu",
    },
});

export default axiosIns;
