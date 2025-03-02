<template>
	<div class="bg-zinc-900 h-[100vh] flex">
		<div class="bg-black w-[307px] p-8">
			<Logo class="mb-[66px]" />
			<div>
				<p class="text-xs font-bold text-[#C2C2C5] mb-4">Today</p>
				<div class="ml-2 mb-15">
					<div
						v-for="item in items"
						:key="item.title"
						class="hover:bg-[#A1842C] hover:rounded-sm p-2"
					>
						<h3 class="text-sm font-bold text-[#F4F4F5]">{{ item.title }}</h3>
						<div class="leading-none">
							<span class="text-xs font-bold text-[#F4F4F5] mr-4">{{
								item.date
							}}</span>
							<span class="text-xs font-bold text-[#D6D6D6]">{{
								item.description
							}}</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<p class="text-xs font-bold text-[#C2C2C5] mb-4">Yesterday</p>
				<div class="ml-2">
					<div
						v-for="item in items"
						:key="item.title"
						class="hover:bg-[#A1842C] hover:rounded-sm p-2"
					>
						<h3 class="text-sm font-bold text-[#F4F4F5]">{{ item.title }}</h3>
						<div class="leading-none">
							<span class="text-xs font-bold text-[#F4F4F5] mr-4">{{
								item.date
							}}</span>
							<span class="text-xs font-bold text-[#D6D6D6]">{{
								item.description
							}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full p-8 pb-15"> 
			<div class="flex justify-between mb-15">
				<div>
					<button
						class="flex gap-3 items-center cursor-pointer font-bold text-[#C2C2C5]"
					>
						<Create />
						Create Note
					</button>
				</div>
				<div>
					<button class="cursor-pointer">
						<Delete class="text-[#6D6D73] hover:text-white" />
					</button>
				</div>
			</div>
            <div style="font-family: 'Playfair Display', serif" class="text-[#D4D4D4] max-w-[537px]  mx-auto">
                <p class="text-[#929292] text-base mb-5">November 22nd, 2024</p>
                <p class="my-3"> Finally moved into my tiny house today! After months of YouTube tutorials, countless trips to Home Depot, and more scrapes and bruises than I care to count, I'm officially a tiny home dweller. The sunset streaming through my handmade stained glass window makes the whole 240 square feet glow like a jewel box. Still can't believe I built this with my own two hands (and Dad's power tools).</p>
                <p class="my-3">Living small means getting creative with space. Today I installed my fold-down desk that transforms into a dining table - probably my proudest DIY achievement yet. The copper pipes and reclaimed wood give it this amazing steampunk vibe I wasn't even planning. Had my first meal on it tonight: takeout ramen and a victory beer, because after all that building, cooking was definitely not happening.</p>
                <p>My favorite spot is the reading nook by the window. I've got all my favorite books within arm's reach, arranged by color because why not? The cushions I sewed last weekend turned out surprisingly well, considering my last sewing project was a very lopsided pencil case in 7th grade. The fairy lights make everything feel magical at night, like I'm living in some kind of woodland cottage rather than parked in my parents' backyard. Next project: figuring out how to grow herbs in vertical planters without blocking my only source of natural light!</p>
            </div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const items = ref([
	{
		title: 'Just finished reading...',
		date: 'Today',
		description: 'The Midnight Library...',
	},
	{
		title: 'Currently reading...',
		date: 'Yesterday',
		description: 'The Alchemist...',
	},
	{
		title: 'Next on my list...',
		date: 'Tomorrow',
		description: '1984...',
	},
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'); 


</style>