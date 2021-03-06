import {point} from '@turf/helpers'
import angle from './'

angle([5, 5], [5, 6], [3, 4])
angle([5, 5], [5, 6], [3, 4], {exterior: true})
angle(point([5, 5]), point([5, 6]), point([3, 4]))
angle(point([5, 5]).geometry, point([5, 6]).geometry, point([3, 4]).geometry)
