import { useState } from "react";

function TravelPreferences({
    destinations,
    preferences,
    setPreferences
}) {

    const [form, setForm] = useState(preferences);

    function handleChange(e) {

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    function handleSubmit(e) {

        e.preventDefault();

        const {
            name,
            ...travelDetails
        } = form;

        setPreferences({
            name,
            ...travelDetails
        });
    //      localStorage.setItem(
    //     "travelPreferences",
    //     JSON.stringify(form)
    // );


        alert("Preferences saved successfully!");

        setForm({
        name: "",
        travelType: "Solo",
        budget: "Budget",
        preferredDestination: ""
    });

    }

    function clearPreferences() {
        const emptyPreferences = {
            name: "",
            travelType: "Solo",
            budget: "Budget",
            preferredDestination: ""
        };

        setForm(emptyPreferences);
        setPreferences(emptyPreferences);

        localStorage.removeItem("travelPreferences");
    }

    return (
        <section
            className="bg-[linear-gradient(135deg,#ffffff,#f8fafc,#eef2ff)]
            rounded-[28px] p-7 md:p-9 mb-7
            border border-slate-200
            shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
        >

            <span className="text-[10px] font-bold uppercase tracking-[3px]
                bg-gradient-to-r from-purple-600 to-blue-600
                bg-clip-text text-transparent"
            >
                Personalize
            </span>

            <h2 className="font-serif text-[32px] font-semibold text-[#18212f] mt-2">
                Travel Preferences
            </h2>

            <p className="text-slate-500 text-sm mt-1 mb-7">
                Tell us about your travel preferences.
            </p>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-5 max-[700px]:grid-cols-1"
            >

                {/* NAME */}
                <div className="flex flex-col gap-2">

                    <label className="text-xs font-bold text-slate-700">
                        Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="h-[46px] px-3 rounded-xl outline-none
                        bg-[linear-gradient(135deg,#ffffff,#f8fafc)]
                        border border-slate-200
                        focus:border-purple-400
                        focus:ring-4 focus:ring-purple-100"
                    />
                </div>

                {/* TRAVEL TYPE */}
                <div className="flex flex-col gap-2">

                    <label className="text-xs font-bold text-slate-700">
                        Travel Type
                    </label>

                    <select
                        name="travelType"
                        value={form.travelType}
                        onChange={handleChange}
                        className="h-[46px] px-3 rounded-xl outline-none
                        bg-[linear-gradient(135deg,#ffffff,#f8fafc)]
                        border border-slate-200
                        focus:border-purple-400"
                    >
                        <option value="Solo">Solo</option>
                        <option value="Couple">Couple</option>
                        <option value="Family">Family</option>
                        <option value="Friends">Friends</option>
                    </select>
                </div>

                {/* BUDGET */}
                <div className="flex flex-col gap-2">

                    <label className="text-xs font-bold text-slate-700">
                        Budget
                    </label>

                    <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="h-[46px] px-3 rounded-xl outline-none
                        bg-[linear-gradient(135deg,#ffffff,#f8fafc)]
                        border border-slate-200
                        focus:border-purple-400"
                    >
                        <option value="Budget">Budget</option>
                        <option value="Standered">Standard</option>
                        <option value="Premium">Premium</option>
                    </select>
                </div>

                {/* DESTINATION */}
                <div className="flex flex-col gap-2">

                    <label className="text-xs font-bold text-slate-700">
                        Preferred Destination
                    </label>

                    <select
                        name="preferredDestination"
                        value={form.preferredDestination}
                        onChange={handleChange}
                        className="h-[46px] px-3 rounded-xl outline-none
                        bg-[linear-gradient(135deg,#ffffff,#f8fafc)]
                        border border-slate-200
                        focus:border-purple-400"
                    >

                        <option value="">
                            Select destination
                        </option>

                        {destinations.map((destination) => (
                            <option
                                key={destination.id}
                                value={destination.name}
                            >
                                {destination.name}
                            </option>
                        ))}

                    </select>
                </div>

                {/* BUTTON */}
                <button
                    type="submit"
                    className="w-fit px-6 py-3 rounded-xl
                    bg-[linear-gradient(135deg,#4f46e5,#7c3aed,#2563eb)]
                    text-white text-xs font-bold
                    shadow-lg shadow-indigo-200
                    hover:scale-105
                    transition-all duration-300
                    max-[700px]:w-full"
                >
                    Save Preferences
                </button>



            </form>

            {/* SAVED */}
            {preferences.name && (
                <div
                    className="mt-6 p-5 rounded-2xl
                    bg-[linear-gradient(135deg,#ecfdf5,#f0fdf4,#eff6ff)]
                    border border-emerald-100"
                >

                    <h3 className="font-serif text-xl text-emerald-900">
                        Welcome, {preferences.name}
                    </h3>

                    <p className="text-slate-600 text-xs mt-2 text-bold font-black">
                        Travel Type: {preferences.travelType}
                    </p>

                    <p className="text-slate-600 text-xs mt-1 font-black">
                        Budget: {preferences.budget}
                    </p>

                    <p className="text-slate-600 text-xs mt-1 font-black">
                        Destination:{" "}
                        {preferences.preferredDestination || "Not Selected"}
                    </p>

                    <button
                        type="button"
                        onClick={clearPreferences}
                        className="mt-4 px-4 py-2 rounded-xl
                                   bg-[linear-gradient(135deg,#7f1d1d,#dc2626)]
                                   text-white text-xs font-bold
                                   hover:scale-105
                                   transition-all duration-300"
                    >
                        Clear Preferences
                    </button>

                </div>
            )}

        </section>
    );
}

export default TravelPreferences;