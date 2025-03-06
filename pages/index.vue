

<template>
	<div class="bg-zinc-900 h-[100vh] flex">
		<div class="bg-black w-[307px] p-8">
			<Logo class="mb-[66px]" />
			<div>
				<p class="text-xs font-bold text-[#C2C2C5] mb-4">Today</p>
				<div class="ml-2 mb-15">
					<div
						v-for="(todayNote,index) in todayNotes"
						@click="selectedNote = todayNote"
						:class="{'bg-[#A1842C] rounded-sm': todayNote.id === selectedNote.id,
						'hover:bg-[#A1842C]/50': todayNote.id !== selectedNote.id
						}"
						:key="`${todayNote.id}-${index}`"
						class="rounded-sm p-2 cursor-pointer"
					>
						<h3 class="text-sm font-bold text-[#F4F4F5] truncate">{{ todayNote.text.substring(0,20)}}...</h3>
						<div class="leading-none">
							<span class="text-xs font-bold text-[#F4F4F5] mr-4 truncate">{{
								new Date(todayNote.updatedAt).toDateString() === new Date().toDateString() ? 'Today' : new Date(todayNote.updatedAt).toLocaleDateString()
							}}</span>
							<span class="text-xs font-bold text-[#D6D6D6] truncate">{{
								todayNote.text.substring(20,35)
							}}...</span>
						</div>
					</div>
				</div>
				<p class="text-xs font-bold text-[#C2C2C5] mb-4">Yesterday</p>
				<div class="ml-2 mb-15">
					<div
						v-for="(yesterdayNote,index) in yesterdayNotes"
						@click="selectedNote = yesterdayNote"
						:class="{'bg-[#A1842C] rounded-sm': yesterdayNote.id === selectedNote.id,
						'hover:bg-[#A1842C]/50': yesterdayNote.id !== selectedNote.id
						}"
						:key="`${yesterdayNote.id}-${index}`"
						class="rounded-sm p-2 cursor-pointer"
					>
						<h3 class="text-sm font-bold text-[#F4F4F5] truncate">{{ yesterdayNote.text.substring(0,20)}}...</h3>
						<div class="leading-none">
							<span class="text-xs font-bold text-[#F4F4F5] mr-4 truncate">{{
								new Date(yesterdayNote.updatedAt).toDateString() === new Date().toDateString() ? 'Today' : new Date(yesterdayNote.updatedAt).toLocaleDateString()
							}}</span>
							<span class="text-xs font-bold text-[#D6D6D6] truncate">{{
								yesterdayNote.text.substring(20,35)
							}}...</span>
						</div>
					</div>
				</div>
				<p class="text-xs font-bold text-[#C2C2C5] mb-4">Earlier</p>
				<div class="ml-2 mb-15">
					<div
						v-for="(earlierNote,index) in earlierNotes"
						@click="selectedNote = earlierNote"
						:class="{'bg-[#A1842C] rounded-sm': earlierNote.id === selectedNote.id,
						'hover:bg-[#A1842C]/50': earlierNote.id !== selectedNote.id
						}"
						:key="`${earlierNote.id}-${index}`"
						class="rounded-sm p-2 cursor-pointer"
					>
						<h3 class="text-sm font-bold text-[#F4F4F5] truncate">{{ earlierNote.text.substring(0,20)}}...</h3>
						<div class="leading-none">
							<span class="text-xs font-bold text-[#F4F4F5] mr-4 truncate">{{
								new Date(earlierNote.updatedAt).toDateString() === new Date().toDateString() ? 'Today' : new Date(earlierNote.updatedAt).toLocaleDateString()
							}}</span>
							<span class="text-xs font-bold text-[#D6D6D6] truncate">{{
								earlierNote.text.substring(20,35)
							}}...</span>
						</div>
					</div>
				</div>
			</div>
		<!-- 	<div>
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
			</div> -->
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
                <p class="text-[#929292] text-base mb-5">{{selectedNote.createdAt ? new Date(selectedNote.createdAt).toLocaleString() : ''}}</p>
                <p class="my-3"> {{selectedNote.text}}</p>
               <!--  <p class="my-3">Living small means getting creative with space. Today I installed my fold-down desk that transforms into a dining table - probably my proudest DIY achievement yet. The copper pipes and reclaimed wood give it this amazing steampunk vibe I wasn't even planning. Had my first meal on it tonight: takeout ramen and a victory beer, because after all that building, cooking was definitely not happening.</p>
                <p>My favorite spot is the reading nook by the window. I've got all my favorite books within arm's reach, arranged by color because why not? The cushions I sewed last weekend turned out surprisingly well, considering my last sewing project was a very lopsided pencil case in 7th grade. The fairy lights make everything feel magical at night, like I'm living in some kind of woodland cottage rather than parked in my parents' backyard. Next project: figuring out how to grow herbs in vertical planters without blocking my only source of natural light!</p> -->
            </div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import axios from 'axios'

import type Notes from '~/types/Note.interface'

const notes = ref<Notes>([])
const selectedNote = ref({})

const todayNotes = computed(() => {
	return notes.value.filter((note: Notes) => {
		const noteDate = new Date(note.updatedAt)

		return noteDate.toDateString() === new Date().toDateString()
	})
})

const yesterdayNotes = computed(() => {
	const yesterday = new Date()
	yesterday.setDate(yesterday.getDate() - 1)
	return notes.value.filter((note: Notes) => {
		
		const noteDate = new Date(note.updatedAt)
		return noteDate.toDateString() === yesterday.toDateString()
	})
})

const earlierNotes = computed(() => {
	const yesterday = new Date()
	yesterday.setDate(yesterday.getDate() - 1)
	return notes.value.filter((note: Notes) => {
		const noteDate = new Date(note.updatedAt)
		return noteDate < yesterday && noteDate.toDateString() !== yesterday.toDateString()
	})
})

/* const todayNotes = notes.v
alue.filter((note: Object) => {
	const noteDate = new Date(note.updatedAt)

	return noteDate.toDateString() === new Date().toDateString()
}) */

definePageMeta({
	middleware: ['auth']
})

/* watch(() => selectedNote.value, (newVal) => {
	console.log(newVal)
})
 */
onMounted(async () => {
	const {data} = await axios.post('/api/notes')
	if(notes.value.length > 0) {
		selectedNote.value = notes.value[0]
		console.log(selectedNote.value)
	}
	/* data.map((note: Notes) => {
		note.createdAt = new Date(note.createdAt).toLocaleTimeString('ru', {
			hour: '2-digit',
			minute: '2-digit'
		})
		note.updatedAt = new Date(note.updatedAt).toLocaleDateString('ru', {
			month: 'long',
			day: 'numeric'
		})
	}) */
	 notes.value = data
   
    console.log(notes.value)
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'); 


</style>