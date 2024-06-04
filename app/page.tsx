import Image from "next/image";
import ChitChat from "@/app/core/ChitChat";
import LindFord from "@/app/core/LindFord";
import Hover from "@/app/core/Hover";
import FirstLast from "./core/FirstLastOddEven";
import FormState from "./core/FormState";
import ParentState from "./core/ParentState";
import NestedGroups from "./core/NestedGroups";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ChitChat/>
            <br/>
            <LindFord/>
            <Hover/>
            <FirstLast/>
            <FormState/>
            <ParentState/>
            <NestedGroups/>
        </main>
    );
}
