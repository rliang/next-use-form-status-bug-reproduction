export default function Home() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          console.log("starting");
          await new Promise((r) => setTimeout(r, 2000));
          console.log("finished");
        }}
      >
        <button type="submit">submit</button>
      </form>
    </>
  );
}
