import React from "react";

const UserSetting = () => {
    return (
        <div className="flex justify-center space-x-8 mt-20 ml-2">
            <div className="mt-12 mr-5">
                <ul className="leading-10 text-xl cursor-pointer">
                    <li>Account</li>
                    <li>Communication Preferences</li>
                    <li>Notes & Highlights</li>
                    <li>Calendar Sync</li>
                </ul>
            </div>
            <div className="mt-10 mb-10 ml-30 max-w-3xl rounded overflow-hidden shadow-md px-10"> {/* Đặt max-width tại đây */}
                <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="font-thin text-3xl text-left w-full">Account</div>
                    </div>
                    <div className="grid gap-4 grid-cols-2">
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="name" className="block mb-2 text-lg font-regular mt-4 font-semibold">Full name</label>
                            <input
                                type="name"
                                name="price"
                                id="price"
                                className="bg-white-50 border text-sm block w-full p-2.5 rounded-md"
                                placeholder="Enter full name"
                                required
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="name" className="block mb-2 text-lg font-regular mt-4 font-semibold">Email address</label>
                            <input
                                type="name"
                                name="price"
                                id="price"
                                className="bg-white-50 border text-sm block w-full p-2.5 rounded-md"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="name" className="block mb-2 text-lg font-regular mt-4 font-semibold">Timezone</label>
                            <div className="relative">
                                <select
                                    name="gender"
                                    id="gender"
                                    className="bg-white border border-black-500/75 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 placeholder-gray-400"
                                    required
                                >
                                    <option value="" disabled selected>Select your timezone</option>
                                    <option value="male">GMT 7</option>
                                    <option value="female">GMT 8</option>
                                    <option value="other">GMT 9</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="name" className="block mb-2 text-lg font-regular mt-4 font-semibold">Language</label>
                            <div className="relative">
                                <select
                                    name="gender"
                                    id="gender"
                                    className="bg-white border border-black-500/75 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 placeholder-gray-400"
                                    required
                                >
                                    <option value="" disabled selected>Select your language</option>
                                    <option value="male">Vietnamese</option>
                                    <option value="female">English</option>
                                    <option value="other">Deustch</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-left mt-10">
                        <button
                            type="button"
                            className="px-6 py-2 bg-white text-blue-700 font-medium rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white"
                        >
                            Save
                        </button>
                    </div>
                    <div className="mt-5 border-b">
                        <hr></hr>
                    </div>
                    <div className="mt-3 text-lg font-regular font-semibold">
                        <p>Two factor authentication (BETA)</p>
                    </div>
                    <div className="w-50 text-sm mt-3">
                        <p>
                            Two-Factor Authentication adds an additional layer of security to your Coursera account. Each time you log in to Coursera, you will be asked to enter a unique code that is only available on your mobile phone. This extra protection ensures that you are the only one who will have access to your Coursera account and courses.
                        </p>
                    </div>
                    <div className="flex justify-left mt-5">
                        <button
                            type="button"
                            className="px-6 py-2 bg-blue-700 text-white font-medium rounded-lg border border-blue-600 hover:bg-white hover:text-blue-600"
                        >
                            Enable two-factor authentication
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSetting;
