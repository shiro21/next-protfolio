import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
    return (
        <section className="flex min-h-screen items-center justify-center flex-col text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">반갑습니다. 노준혁입니다.
                        <br className="hidden lg:inline-block" />Portfolio 테스트입니다.
                    </h1>
                        <p className="mb-8 leading-relaxed">간에 가장 어디 속에서 것이다. 트고, 보이는 피는 청춘에서만 낙원을 이것이다.</p>
                    <div className="flex justify-center">
                        <Link href={"/project"} className="a-primary">
                            Project 보러가기
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation />
                </div>
            </div>
        </section>
    );
}