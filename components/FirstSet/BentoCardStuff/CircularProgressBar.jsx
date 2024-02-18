const CircularProgressBar = ({ progress }) => {
    return (

        <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked disabled />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#4BDB61]"></div>
        </label>
    );
};

export default CircularProgressBar;