import Image from "next/image";
import { team } from "@/data/team";

export default function LeadershipTable() {
  return (
    <div>
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-meltz-blue text-white">
              <th className="px-6 py-4 text-left text-sm font-bold tracking-[0.15em] uppercase w-56">
                &nbsp;
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold tracking-[0.15em] uppercase">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold tracking-[0.15em] uppercase">
                Role
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold tracking-[0.15em] uppercase">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {team.leadership.map((member, index) => (
              <tr
                key={member.id}
                className={`border-b border-gray-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-meltz-light"
                }`}
              >
                <td className="px-6 py-6">
                  <div className="relative aspect-[4/5] w-44 max-w-full overflow-hidden bg-meltz-light border border-gray-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="176px"
                      className="object-cover object-top"
                    />
                  </div>
                </td>
                <td className="px-6 py-6">
                  <p className="text-xl font-bold text-meltz-charcoal">
                    {member.name}
                  </p>
                </td>
                <td className="px-6 py-6">
                  <p className="text-lg text-meltz-gray">{member.role}</p>
                </td>
                <td className="px-6 py-6">
                  <p className="text-lg text-meltz-gray">{member.location}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        {team.leadership.map((member) => (
          <div
            key={member.id}
            className="bg-white border border-gray-200 overflow-hidden"
          >
            <div className="relative aspect-[4/5] w-full bg-meltz-light">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-5">
              <p className="text-lg font-bold text-meltz-charcoal">
                {member.name}
              </p>
              <p className="text-sm text-meltz-gray mt-1">{member.role}</p>
              <p className="text-sm text-meltz-gray mt-1">{member.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}