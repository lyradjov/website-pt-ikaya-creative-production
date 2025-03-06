function addServicePair(service1, service2) {
    const servicesContainer = document.getElementById('services-container');
    const newServicePair = document.createElement('div');
    newServicePair.className = 'grid grid-cols-1 md:grid-cols-2 gap-8 mb-8';

    newServicePair.innerHTML = `
        <div class="relative service-card p-6">
            <div class="icon bg-white text-black p-3 rounded-full flex items-center justify-center w-12 h-12 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m2 4H7m6-8V4m-2 16h4" />
                </svg>
            </div>
            <div class="md:col-span-2"><div class="divider"></div></div>
            <h3 class="text-xl font-semibold mb-2">${service1.title}</h3>
            <ul class="text-gray-300">
                ${service1.items.map(item => `<li class="mb-1">• ${item}</li>`).join('')}
            </ul>
        </div>
        <div class="relative service-card p-6">
            <div class="icon bg-white text-black p-3 rounded-full flex items-center justify-center w-12 h-12 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m2 4H7m6-8V4m-2 16h4" />
                </svg>
            </div>
            <div class="md:col-span-2"><div class="divider"></div></div>
            <h3 class="text-xl font-semibold mb-2">${service2.title}</h3>
            <ul class="text-gray-300">
                ${service2.items.map(item => `<li class="mb-1">• ${item}</li>`).join('')}
            </ul>
        </div>

        <div class="relative service-card p-6">
            <div class="icon bg-white text-black p-3 rounded-full flex items-center justify-center w-12 h-12 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m2 4H7m6-8V4m-2 16h4" />
                </svg>
            </div>
            <div class="md:col-span-2"><div class="divider"></div></div>
            <h3 class="text-xl font-semibold mb-2">${service2.title}</h3>
            <ul class="text-gray-300">
                ${service2.items.map(item => `<li class="mb-1">• ${item}</li>`).join('')}
            </ul>
        </div>
    `;

    servicesContainer.appendChild(newServicePair);

    
}

const servicesData = [
    {
        title: 'Event Advertising',
        items: ['Event Planning', 'Campaign Management']
    },
    {
        title: 'Social Media Management',
        items: ['Content Creation', 'Community Management']
    },
    {
        title: 'Marketing Strategies',
        items: ['Strategy Development', 'Performance Analysis']
    },
    {
        title: 'Planning Target Market',
        items: ['Market Analysis', 'Target Audience Identification']
    }
];

for (let i = 0; i < servicesData.length; i += 2) {
    addServicePair(servicesData[i], servicesData[i + 1]);
}