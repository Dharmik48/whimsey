import Image from 'next/image'
import Avatar from 'public/avatars/1.png'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'

type CardProps = React.ComponentProps<typeof Card>
type CustomCardProps = CardProps & {
	cardHeader?: React.ReactNode
	cardContent?: React.ReactNode
	cardFooter?: React.ReactNode
}

const CustomCard: React.FC<CustomCardProps> = ({
	className,
	cardHeader,
	cardContent,
	cardFooter,
	...props
}) => {
	return (
		<Card className={`w-[380px] ${className}`} {...props}>
			<CardHeader>{cardHeader}</CardHeader>
			<CardContent className='grid gap-4 '>{cardContent}</CardContent>
			<CardFooter>{cardFooter}</CardFooter>
		</Card>
	)
}

export default CustomCard

{
	/* <div className='w-[430px] rounded-xl border border-Neutrals/neutrals-11'>
			<div className='flex gap-4 items-center'>
				<Image src={Avatar} alt={name} className='rounded-full' />
				<div>
					<p className='text-washed-purple-600'>{name}</p>
					<p className='text-washed-purple-700'>@{name}</p>
				</div>
			</div>
			<p className='text-washed-purple-800'>{message}</p>
		</div> */
}
