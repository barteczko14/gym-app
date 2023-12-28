import styled from 'styled-components'

export const Title = styled.h1`
	margin: 0;
	padding: 20px !important;
	text-align: center;
`
export const Ul = styled.ul`
	padding: 0 20px;
`
export const Li = styled.li`
	margin-bottom: 8px;
	background-color: #f9f9f9;
	padding: 12px 20px;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const MainBtnsContainer = styled.div`
	padding: 20px 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const Overlay = styled.div`
	z-index: 9999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`
export const ModalContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`
export const ModalContent = styled.div`
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	width: 300px;
	padding: 20px;
`
export const ModalTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 8px;
	font-size: 24px;
`
export const ModalCloseButton = styled.button`
	background: none;
	border: none;
	font-size: 18px;
	cursor: pointer;
`
export const ModalButton = styled.button`
	background-color: #0081cf;
	color: #fff;
	border: none;
	padding: 8px 16px;
	border-radius: 8px;
	cursor: pointer;
	font-size: 16px;
	margin-left: 8px;
	&:last-child {
		margin-left: 14px;
		background-color: #008e9b;
	}
`
export const ModalInput = styled.input`
	width: 90%;
	padding: 8px;
	margin-bottom: 30px;
	border: 1px solid #ccc;
	border-radius: 4px;
`
export const ModalButtonGroup = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 20px;
`
export const Container = styled.div`
	margin-bottom: 100px;
`
export const FirstBtnsContainer = styled.div`
	padding: 20px 40px;
	display: flex;
	justify-content: end;
	align-items: center;
`
