import Button from '@/components/ui/Button/Button'
import Input from '@/components/ui/Input/Input'
import { Dialog, Flex, Popover } from '@radix-ui/themes'
import cls from './AddUser.module.css'
import ButtonKrestik from '@/components/ui/ButtonKrestik/ButtonKrestik'
import ArrowIcon from '@/assets/icons/arrow.svg?react'
import Permission from '../Permission/Permission'
import { FormEvent, useState } from 'react'
import Alert from '@/components/ui/Alert/Alert'
import Badge from '@/components/ui/Badge/Badge'
import { useUsers } from '../store/useUsers'

const AddUser = () => {
	const [open, setOpen] = useState(false)
	const [alertOpen, setAlertOpen] = useState(false)
	const [permissions, setPermission] = useState<string[]>([])
	const { addUsers } = useUsers()

	const handleGetPermission = (param: string[]) => {
		setPermission(param)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		const formData = new FormData(e.target as HTMLFormElement)
		const email = formData.get('email') as string | null
		if (!email?.trim()) return alert('Заполните поля')
		addUsers({ email: email ?? '', permissions: permissions }, () => {
			setAlertOpen(true)
			setOpen(false)
		})
	}

	return (
		<>
			<Dialog.Root open={open} onOpenChange={open => setOpen(open)}>
				<Button onClick={() => setOpen(true)} width={218}>
					Добавить пользователя
				</Button>

				<Dialog.Content className={cls.modal}>
					<Dialog.Close>
						<ButtonKrestik className={cls.modal_close} />
					</Dialog.Close>
					<h3 className={cls.title}>Отправьте приглашение</h3>
					<form onSubmit={handleSubmit}>
						<Flex direction='column' gap='2'>
							<Input
								type='email'
								name='email'
								placeholder='Email'
								className={cls.input}
							/>
							<Popover.Root>
								<Popover.Trigger>
									<button className={cls.button_permission}>
										Выберите права доступа
										<ArrowIcon />
									</button>
								</Popover.Trigger>
								{!!permissions.length && (
									<Flex gap='2' wrap='wrap'>
										{permissions.map(item => (
											<Badge key={item}>{item}</Badge>
										))}
									</Flex>
								)}
								<Popover.Content className={cls.popover}>
									<Permission
										permissionsData={permissions}
										getPermission={handleGetPermission}
									/>
								</Popover.Content>
							</Popover.Root>
							<Button borderRadius={15} height={61}>
								Отправить приглашение
							</Button>
						</Flex>
					</form>
				</Dialog.Content>
			</Dialog.Root>
			<Alert
				title='Приглашение отправлено на почту example@email.com'
				open={alertOpen}
				onOpenChange={open => setAlertOpen(open)}
			/>
		</>
	)
}

export default AddUser
