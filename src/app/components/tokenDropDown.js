import { useIOStore } from "../store/store";

export default function TokenDropDown() {
  const setToken = useIOStore((state) => state.setToken);
  return (
    <>
      <select
        onChange={(e) => {
          setToken(e.target.value);
        }}
        name="tokens"
        id="token-select"
        className="border-[#6600ff] border-solid border-2 rounded-lg bg-transparent text-white p-2 appearance-none"
      >
        <option value="USDT">USDT</option>
        <option value="BNB">BNB</option>
        <option value="RDT">RDT</option>
      </select>
    </>
  );
}
