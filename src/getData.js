export default async function getData({ setData }) {
  let resp = await fetch(
    "https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json"
  );

  let sample_data = (await resp.json()).appointments;

  setData(sample_data);
}
