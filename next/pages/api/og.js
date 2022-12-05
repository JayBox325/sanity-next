import { ImageResponse } from '@vercel/og';
import GoogleFonts from "next-google-fonts";

export const config = {
    runtime: 'experimental-edge',
};

export default async function handler() {

    return new ImageResponse(
        (
            <>
                {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" /> */}

                <div
                    style={{
                        fontSize: 128,
                        background: 'white',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >

                    <div tw="bg-gray-100 relative h-[600px] w-[1200px] flex flex-col justify-between">
                        <div tw="flex absolute left-12 top-12">
                            <span tw="text-4xl">Logo here</span>
                        </div>
                        <h2 tw="flex w-full absolute bottom-0 left-0 px-12">
                            <div tw="flex flex-col">
                                <span tw="text-7xl text-gray-900 font-black tracking-tight">Page Title here</span>
                                <span tw="text-4xl text-gray-900 tracking-tight text-indigo-600">Small extract</span>
                            </div>
                        </h2>
                    </div>

                </div>
            </>
        ),
        {
            width: 1200,
            height: 600
        },
    );
}