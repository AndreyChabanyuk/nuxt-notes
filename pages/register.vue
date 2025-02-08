<template>
    <div class="bg-black h-screen flex ">
        <div class="bg-zinc-900 w-[516px] p-8">
            <Logo />
            <h1 class="text-white font-bold text-lg mt-[44px]">Sign up for a free account</h1>
            <p class="text-zinc-300 font-normal mt-0.5">Already registered?
            <nuxt-link class="text-[#FFAC00] underline font-bold" to="/login"> Log in </nuxt-link>to your account</p>
            <div class="mt-[33px]">
                <label for="" class="text-white text-sm text-zinc-300 block mb-[9.5px]">Email Address</label>
                <input 
                    placeholder="you@example.com"
                    type="email" class=" block w-full bg-[#27272A] border border-[#3F3F46] rounded text-white px-4 py-2 placeholder:text-zinc-500 text-sm">
            </div>
        </div>      
    </div>
</template>