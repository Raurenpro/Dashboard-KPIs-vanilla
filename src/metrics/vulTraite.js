const colorBgs = {
    red: 'bg-gradient-to-br from-red-500 to-orange-500',
    orange: 'bg-gradient-to-br from-orange-500 to-amber-500',
    yellow: 'bg-gradient-to-br from-yellow-500 to-amber-500',
    green: 'bg-gradient-to-br from-green-500 to-lime-500',
    zinc: 'bg-zinc-800 border border-zinc-600'
};

const colorTexts = {
    red: 'text-red-500',
    green: 'text-green-500'
}

export function vulTraite(metricData, title) {
    const diff = metricData.data[0] - metricData.data[1]

    let colorB = 'zinc';

    if (metricData.data[0] < 25) {
        colorB = 'red';
    } else if (metricData.data[0] < 50) {
        colorB = 'orange';
    } else if (metricData.data[0] < 75) {
        colorB = 'yellow';
    } else if (metricData.data[0] >= 75) {
        colorB = 'green';
    }

    let colorT = 'text-white';

    if (diff < 0) {
        colorT = 'red';
    } else if (diff > 0) {
        colorT = 'green';
    }

        const colorBg = colorBgs[colorB];
        const colorText = colorTexts[colorT];

    return `
        <div class='flex flex-col w-full ${colorBg} rounded-xl p-5 space-y-3 justify-evenly'>
            <div class='font-bold text-sm'>
                ${title}
            </div>
            <div class='flex w-full justify-between'>
                <div class='flex w-[60%] font-bold justify-center space-x-1'>
                    <div class='flex text-4xl items-center'>
                        ${metricData.data[0]}
                    </div>
                    <div class='flex text-xl items-end'>
                        %
                    </div>
                </div>
                <div class='flex w-[40%] items-center rounded-md bg-zinc-800 justify-center font-bold ${colorText} my-1 mx-2'>
                    + ${diff} %
                </div>
            </div>
        </div>
    `;
}