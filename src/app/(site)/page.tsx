import TitleSection from '@/components/landing-page/TitleSection'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Banner from 'public/appBanner.png'

const HomePage = () => {
	return (
		<section>
			<div className='overflow-x-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
				<TitleSection
					title='All-In-One Collaboration and
Productivity Platform'
					pill='✨ Your Workspace, Perfected'
				/>
				<div className='p-[2px] mt-6 sm:w-[300px] rounded-lg dark:bg-gradient-to-l dark:from-brand-primaryBlue dark:to-brand-primaryPurple'>
					<Button
						variant={'secondary'}
						className='w-full text-lg bg-background rounded-lg p-1 dark:text-washed-purple-500'
					>
						Get whimsey Free
					</Button>
				</div>
				<div className='w-[750px] -mt-8 -ml-5 sm:w-full md:mx-auto sm:ml-0 md:-mt-16 md:flex justify-center items-center relative'>
					<Image src={Banner} alt='Banner' />
					<div className='absolute w-full top-1/2 bottom-0 bg-gradient-to-b dark:from-transparent dark:to-background'></div>
				</div>
			</div>
		</section>
	)
}

export default HomePage
