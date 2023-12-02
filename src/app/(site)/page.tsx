import TitleSection from '@/components/landing-page/TitleSection'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Banner from 'public/appBanner.png'
import { CLIENTS } from '@/lib/cosntansts'

const HomePage = () => {
	return (
		<>
			<section className='overflow-x-hidden px-4 sm:px-6 mt-10 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
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
			</section>
			<section className='flex overflow-hidden mt-10 gap-10 md:gap-16'>
				{[...Array(3)].map(arr => (
					<div
						key={arr}
						className='gap-10 md:gap-16 animate-slide flex flex-nowrap'
					>
						{CLIENTS.map(client => (
							<div
								key={client.alt}
								className='relative w-[200px] shrink-0 flex items-center'
							>
								<Image
									src={client.logo}
									alt={client.alt}
									className='object-contain max-w-none'
								/>
							</div>
						))}
					</div>
				))}
			</section>
		</>
	)
}

export default HomePage
