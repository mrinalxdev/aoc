function App() {
  return (
    <div className="flex flex-col">
      <div className="m-5 flex flex-col">
        <h1 className="font-title text-4xl font-bold underline underline-offset-4">
          Build your own Shii..
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          I have learnt and currently going indepth in the following languages{" "}
          <span className="text-blue-500">golang</span>,{" "}
          <span className="text-yellow-500 font-bold">javascript</span> and
          <span className="font-bold"> python</span>
        </p>
        <p className="text-lg text-gray-600">
          So here we will build some cool stuffs, something which actually makes
          you learn some stuffs
        </p>
        <p className="text-lg text-gray-600 max-w-2xl">
          At the end of every pdf files there will be some questions you must
          encounter and tag <a href="https://x.com/Hi_Mrinal">@Hi_Mrinal</a> on
          twitter after completing the questions to get your mentions !!
        </p>
      </div>

      <div className="flex flex-col m-5">
        <h1 className="font-title text-2xl font-semibold">Easy</h1>
        <ul className="list-disc mt-6">
          <li className="ml-4">
            <p>
              Building a Distributed System in Golang (part 1) :{" "}
              <a
                href="#"
                className="text-blue-500 underline underline-offset-2"
              >
                Link to PDF
              </a>
            </p>
          </li>
          <li className="ml-4">
            <p>
              Image Model Classification from scratch in tensorflow.js in NodeJs:{" "}
              <a
                href="#"
                className="text-blue-500 underline underline-offset-2"
              >
                Link to PDF
              </a>
            </p>
          </li>
          <li className="ml-4">
            <p>
              Building a DNS server in Golang: {" "}
              <a
                href="#"
                className="text-blue-500 underline underline-offset-2"
              >
                Link to PDF
              </a>
            </p>
          </li>
          <li className="ml-4">
            <p>
              Building a Network Visualization Tool in NodeJs: {" "}
              <a
                href="#"
                className="text-blue-500 underline underline-offset-2"
              >
                Link to PDF
              </a>
            </p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col m-5">
        <h1 className="font-title text-2xl font-semibold">Medium</h1>
        <ul className="list-disc mt-6">
          <li className="ml-4">
            <p>
              Building a COP in Golang :{" "}
              <a
                href="#"
                className="text-blue-500 underline underline-offset-2"
              >
                Link to PDF
              </a>
            </p>
          </li>
          <li className="ml-4">
            <p>
              Implementing MQTT broker in python :{" "}
              <a
                href="#"
                className="text-blue-500 underline underline-offset-2"
              >
                Link to PDF
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
