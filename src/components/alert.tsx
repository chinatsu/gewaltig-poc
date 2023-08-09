import { ReactNode } from "react";

export function Alert({children}: {children: ReactNode}) {
    return <div className="bg-orange-900 text-white rounded w-full px-4 py-1">{children}</div>
}