import { Profile, ProfileSkeleton } from "@/components/profile/profile";
import { Suspense } from "react";

type PlayerProps = { params: { id: string } };

export const dynamic = 'force-dynamic'

export default async function Player({params}: PlayerProps) {
   
    return <Suspense fallback={<ProfileSkeleton />}>
        <Profile userId={params.id} />
    </Suspense>
}
