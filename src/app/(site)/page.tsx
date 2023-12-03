import TitleSection from '@/components/landing-page/TitleSection'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Banner from 'public/appBanner.png'
import Cal from 'public/cal.png'
import { CLIENTS, USERS } from '@/lib/cosntansts'
import CustomCard from '@/components/landing-page/CustomCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CardDescription, CardTitle } from '@/components/ui/card'

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
			<section className='overflow-x-hidden px-4 sm:px-6 mt-24 sm:flex sm:flex-col gap-4 md:justify-center md:items-center'>
				<TitleSection
					title='Keep track of your meetings
all in one place'
					subheading='Capture your ideas, thoughts, and meeting notes in a
structured and organized manner.'
					pill='Features'
				/>
				<div className='rounded-xl border-4 border-washed-purple-300 border-opacity-10 w-[425px] sm:w-[512px] ml-5 md:mx-auto sm:ml-0 mt-10 md:flex justify-center items-center relative'>
					<Image src={Cal} alt='Calender' className='opacity-80 rounded-xl' />
					<div className='top-10 w-full blur-[256px] opacity-80 bg-brand-primaryPurple rounded-full h-1/2 absolute -z-[1]'></div>
				</div>
			</section>
			<section className='relative overflow-x-hidden px-4 sm:px-6 mt-24 flex flex-col gap-4 md:justify-center md:items-center'>
				<TitleSection
					title='Trusted by all'
					subheading='Join thousands of satisfied users who rely on our platform for their
personal and professional productivity needs.'
					pill='Testimonials'
				/>
				<div className='top-1/4 w-1/4 blur-[256px] opacity-80 bg-brand-primaryPurple rounded-full h-1/2 absolute -z-[1]'></div>
				{[...Array(2)].map((arr, i) => (
					<div
						key={arr}
						className={`mt-10 self-start animate-[slide_250s_linear_infinite] flex gap-6 hover:paused ${
							i === 1 &&
							'flex-row-reverse animate-[slide_250s_linear_infinite_reverse] ml-[100vw]'
						}`}
					>
						{USERS.map((testimony, i) => (
							<CustomCard
								key={testimony.name}
								className='w-[500px] shrink-0 rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background'
								cardHeader={
									<div className='flex items-center gap-4'>
										<Avatar>
											<AvatarImage src={`/avatars/${i + 1}.png`} />
											<AvatarFallback>
												{testimony.name.substring(0, 2)}
											</AvatarFallback>
										</Avatar>
										<div>
											<CardTitle className='text-foreground'>
												{testimony.name}
											</CardTitle>
											<CardDescription className='text-washed-purple-800'>
												@{testimony.name.toLocaleLowerCase()}
											</CardDescription>
										</div>
									</div>
								}
								cardContent={
									<p className='dark:text-washed-purple-800'>
										{testimony.message}
									</p>
								}
							/>
						))}
					</div>
				))}
			</section>
		</>
	)
}

export default HomePage
