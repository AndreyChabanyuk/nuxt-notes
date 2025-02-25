<template>
	<div class="bg-black h-screen flex">
		<div class="bg-zinc-900 w-[516px] p-12 flex flex-col justify-center">
			<Logo />
			<h1 class="text-white font-bold text-lg mt-[44px]">
				Sign up for a free account
			</h1>
			<p class="text-zinc-300 font-normal mt-0.5">
				Already registered?
				<nuxt-link class="text-[#FFAC00] underline font-bold" to="/login">
					Log in </nuxt-link
				>to your account
			</p>

			<form @submit.prevent="submit">
				<div class="mt-[33px]">
					<label
						for=""
						class="text-white text-sm text-zinc-300 block mb-[9.5px]"
						>Email Address</label
					>
					<input
                        v-model="email"
						placeholder="you@example.com"
						type=""
						class="block w-full bg-[#27272A] border border-[#3F3F46] rounded text-white px-4 py-2 placeholder:text-zinc-500 text-sm"
					/>
				</div>
				<div class="mt-[33px]">
					<label
						for=""
						class="text-white text-sm text-zinc-300 block mb-[9.5px]"
						>Password</label
					>
					<input
						placeholder="************"
                        v-model="password"
						type="password"
						class="block w-full bg-[#27272A] border border-[#3F3F46] rounded text-white px-4 py-2 placeholder:text-zinc-500 text-sm"
					/>
				</div>
				<div>
					<button
						class="rounded-full w-full mt-8 bg-[#FFAC00] text-sm font-bold px-4 py-2 flex justify-center items-center space-x-2 text-[#4B360A]"
					>
						<span>Sign up</span>
						<ArrowRight class="mt-1.5" />
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import Swal from 'sweetalert2'

const password = ref('')
const email = ref('')

const submit = async () => {
	console.log('submit')
		try {
			const response = await axios.post('/api/user', {
				email: email.value,
				password: password.value
			})
			const { isConfirmed } = await Swal.fire({
			   title: 'Success',
			   text: 'Account created successfully',
			   icon: 'success',
			   confirmButtonText: 'Close'
			})
			if(isConfirmed){
				navigateTo('/')
			}
			/* data.value = response.data */
			/* console.log(data.value) */
		} catch (error) {
			console.log("Error")
			console.log(error.response?.data?.message)
			Swal.fire({
			   title: 'Error!',
			   text: error.response?.data?.message,
			   icon: 'error',
			   confirmButtonText: 'Close'
			})
		}
}


/* $fetch('/api/user',{
    method: 'POST',
    body: {
        email: email.value,
        password: password.value
    }
}) */

</script>
