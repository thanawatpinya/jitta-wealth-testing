import './styles/globals.css';

import {
  table1Columns,
  table1Data,
  table2Columns,
  table2Data
} from "./constants/mock-data"
import ButtonGroup from "./components/button/button-group"

const authorsTableButton = [
  {
    title: "ALL",
  },
  {
    title: "ONLINE",
  }
]

const projectTableButton = [
  {
    title: "ALL",
  },
  {
    title: "ONLINE",
  },
  {
    title: "STROES",
  }
]

export default function Page() {
  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-10 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden md:rounded-lg shadow-lg">
                <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white border-b-0 w- flex justify-between">
                  <p>Authors Table</p>
                  <ButtonGroup items={authorsTableButton} />
                </div>
                <table className="min-w-full">
                  <thead className="border-b border-zinc-200">
                    <tr>
                      {table1Columns.map(item => (
                        <th key={item.title} scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 font-bold">
                          {item.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {table1Data.map(item => (
                      <tr key={item.key} className="border-b border-zinc-200 hover:bg-gray-50 dark:hover:bg-gray-50">
                        <td className="border-1 border-zinc-200 border-t-zinc-500 px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          <div className="flex items-center gap-x-4">
                            <div className="object-cover w-8 h-8 rounded-md bg-contain" style={{ backgroundImage: `url(./${item.author.avatar})` }} />
                            <div>
                              <h2 className="text-sm font-medium text-gray-800 dark:text-gray-700">{item.author.name}</h2>
                              <p className="text-xs font-normal text-gray-600 dark:text-gray-500">{item.author.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="border-1 border-zinc-200 border-t-zinc-500 px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div>
                            <h2 className="text-sm font-medium text-gray-800 dark:text-gray-700">{item.func.job}</h2>
                            <p className="text-xs font-normal text-gray-600 dark:text-gray-500">{item.func.department}</p>
                          </div>
                        </td>
                        <td className="border-1 border-zinc-200 border-t-zinc-500 px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className={`inline-flex items-center px-3 py-1 rounded-md gap-x-2 text-white ${item.status === 1 ? "dark:bg-blue-500" : "bg-gray-400"}`}>
                            <h2 className="text-sm font-normal">{item.status === 1 ? "ONLINE" : "OFFLINE"}</h2>
                          </div>
                        </td>
                        <td className="border-1 border-zinc-200 border-t-zinc-500 px-4 py-4 text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">{item.employed}</td>
                        <td className="border-1 border-zinc-200 border-t-zinc-500 px-4 py-4 text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">Edit</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="overflow-hidden md:rounded-lg shadow-lg mt-10">
                <div className="p-5 text-lg font-semibold text-left text-gray-900 bg-white border-b-0 w- flex justify-between">
                  <p>Projects Table</p>
                  <ButtonGroup items={projectTableButton} />
                </div>
                <table className="min-w-full">
                  <thead className="border-b border-zinc-200">
                    <tr>
                      {table2Columns.map(item => (
                        <th key={item.title} scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 font-bold">
                          {item.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {table2Data.map(item => {
                      const percent: number = typeof item.completion === "object" ? item.completion.value : item.completion
                      let progressColor: string =  "bg-blue-600"
                      if (item.status === "done") {
                        progressColor = "bg-green-600"
                      } else if (item.status === "canceled") {
                        progressColor = "bg-red-600"
                      }
                      return (
                        <tr key={item.key} className="border-b border-zinc-200 hover:bg-gray-50 dark:hover:bg-gray-50">
                          <td className="border-1 border-zinc-200 border-t-zinc-500 px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                            <div className="flex items-center gap-x-4">
                              <div className="object-cover w-8 h-8 rounded-md bg-contain" style={{ backgroundImage: `url(./${item.company.logo})` }} />
                              <div>
                                <h2 className="text-sm font-medium text-gray-800 dark:text-gray-700">{item.company.name}</h2>
                              </div>
                            </div>
                          </td>
                          <td className="border-1 border-zinc-200 border-t-zinc-500 px-4 py-4 text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">{item.budget}</td>
                          <td className="border-1 border-zinc-200 border-t-zinc-500 px-4 py-4 text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">{item.status}</td>
                          <td className="border-1 border-zinc-200 border-t-zinc-500 px-5 py-4 text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">
                            <div className="flex items-center w-full h-full">
                              <span className="text-sm text-gray-500 dark:text-gray-500 mr-5">{`${percent}%`}</span>
                              <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-200">
                                <div className={`${progressColor} h-1 rounded-full`} style={{width: `${percent}%`}}></div>
                              </div>
                            </div>
                          </td>
                          <td className="border-1 border-zinc-200 border-t-zinc-500 px-4 py-4 text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap">Edit</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
