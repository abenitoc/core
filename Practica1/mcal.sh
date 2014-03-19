#!/bin/sh
## Script de mcal       
## Alberto Benito Campo 03940826Y
## Javier Biosca Vergara 53764843C


case $# in 

	0) 	cal
		exit 0
	;;
	
	1) 
	
		if [ $1 = -help ]; then
			echo "Introduzca mes y año. Abreviaturas válidas: ene, jan, feb, mar, apr, abr, may, jun, jul, ago, aug, sep, oct, nov , dec, dic" 
			exit 0

		elif [ $1 -gt 0 ] && [ $1 -le 12 ]; then
			cal $1 2014
			exit 0

		## Si no, lo interpreto como año
		elif [ $1 -gt 0 ]; then
			cal $1
			exit 0

		else 
			echo "Error, en los parámetros" 
			exit 1	
		
		fi
	;;
	
	2)
	
		if [ $1 -gt 0 ] && [ $1 -lt 13 ] && [ $2 -gt 0 ]  ; then
			cal $1 $2
			exit 0
		

	## Paranoid
	elif [ $2 -gt 0 ]; then

		## Comprobamos si se ha pasado la abreviatura y calculamos para el mes pasado como parámetro 
		case "$1" in
			ene | jan | feb | mar | apr | abr | may | jun | jul | ago | aug | sep | oct | nov | dec | dic ) cal $1 $2
				;;

			*) echo "Mes mal escrito, consulte help"
		esac
	

	else echo "Error en parámetros pasados"

	fi;;

	*) echo "Demasiados parámetros" 
		exit 1;;

esac
