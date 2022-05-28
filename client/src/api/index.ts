import axios from "axios";

const userBase = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users`;
const vaultBase = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vault`;

export function registerUser(payload: {
  hashedPassword: string;
  email: string;
}) {
  return axios
    .post<{ salt: string; vault: string }>(userBase, payload, {
      withCredentials: true,
    })
    .then((res) => res.data);
}

export function loginUser(payload: { hashedPassword: string; email: string }) {
  return axios
    .post<{ salt: string; vault: string }>(`${userBase}/login`, payload, {
      withCredentials: true,
    })
    .then((res) => res.data);
}

export function saveVault({ encryptedVault }: { encryptedVault: string }) {
  return axios
    .put(vaultBase, { encryptedVault }, { withCredentials: true })
    .then((res) => res.data);
}
